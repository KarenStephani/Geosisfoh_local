<?php
defined('BASEPATH') or exit('No direct script access allowed');

class AppLogin extends CI_Controller
{
   public function __construct()
    {
        parent::__construct();
        $this->load->model('Admin_model');
        $this->load->helper(array('form', 'url', 'string'));
    }

    public function index()
    {
        $data["usuario"]  = "";
        $data["password"] = "";

        if ($this->input->server('REQUEST_METHOD') == 'GET') {
            $token                  = md5(uniqid(rand(), true));
            $data['token']          = $token;
            $_SESSION['token']      = $token;
            $_SESSION['token_time'] = time();
            $this->load->view('login/login-new', $data);

        } else if ($this->input->server('REQUEST_METHOD') == 'POST') {

            if ($_SESSION['token'] == $_POST["token"]) {     
                $url = 'http://144.22.49.31:8110/sisfohcomunservices/obtenerUsuarioSeguridad';
                $usuario = $this->security->xss_clean($this->input->post('user_name'));
                $contrasena = $this->security->xss_clean($this->input->post('user_clave'));
                $idSistema = 19;
                    $data = [
                        'usuario' => $usuario,
                        'contrasena' => $contrasena,
                        'idSistema' => $idSistema
                    ];

                    $payload = json_encode($data);
                    $curl = curl_init($url);
                    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($curl, CURLOPT_POST, true);
                    curl_setopt($curl, CURLOPT_POSTFIELDS, $payload);
                    curl_setopt($curl, CURLOPT_HTTPHEADER, [
                        'Content-Type: application/json',
                        'Content-Length: ' . strlen($payload)
                    ]);

                    $resultado = curl_exec($curl);
                    curl_close($curl);                    
                    $respo = json_decode($resultado, true);
                    $value[0]=$respo;
                    if ($respo !== null) {
                       if (isset($respo["usuario"])) {
                            $usuario = $respo["usuario"];
                            $ubigeo = $respo["ubigeo"];                 
                            $ubigeo_geo = $ubigeo["ubigeo"];
                            $lista_rol = $respo["listadoRoles"][0]["idRol"];

                           $value[0]["es_municipal"] = false;

                           if ($lista_rol=='123') {
                            $ubigeos= $this->Admin_model->raw("SELECT  iddist,coddpto,nom_dpto,codprov,nom_prov,nombre_dist,x_max, x_min, y_max, y_min FROM tb_distritos WHERE iddist='".$ubigeo_geo."'", true)[0];
                            $value[0]["ubigeos"] = $ubigeos;
                            $value[0]["es_municipal"] = true;                            
                            }

                            $this->session->set_userdata('user', $value[0]);
                            $data["user"] = $this->session->user;
                            date_default_timezone_set("America/Lima");
                            $time      = new DateTime();
                            $fecha_ing = $time->format('Y-m-d H:i:s');

                                $sesion = array(
                                    "id_user" => $value[0]["idUsuario"],
                                    "sesion"  => get_sesion(32),
                                    "activo"  => '1',
                                    "valor"   => json_encode(utf8ize($value[0])),
                                );
                              $this->Admin_model->save("tb_sessions", $sesion, 0, null);

                               if($lista_rol=='123'){
                                    redirect(site_url("App/mapa"));                                     

                                } else{
                                    redirect(site_url("App/index"));                                  
                                     
                                }           

                          } else {
                            redirect(base_url());
                        }
                     } else {
                        redirect(base_url());
                    }


              } else {
                redirect(base_url());
            }

        }
    }
 

    public function logout()
    {

        $this->session->unset_userdata('user');
        $this->session->sess_destroy();
        redirect(base_url());
    }
}
