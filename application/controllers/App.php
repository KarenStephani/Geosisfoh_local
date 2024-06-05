<?php
defined('BASEPATH') or exit('No direct script access allowed');

class App extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('Admin_model');
        $this->load->helper(array('form', 'url', 'ubigeo'));
        
    }

    public function index()
    {

        if ($this->session->userdata('user')) {
            $data["user"] = $this->session->user;
            $listadoRoles = $this->session->user["listadoRoles"];
            $valrolid=$listadoRoles['0']["idRol"];
            $data["departamentos"] = get_departamentos($valrolid);
            $query = $this->db->query("select sum(meta) as meta  from tb_hogares_meta2024");
                 if ($query->num_rows() > 0) {
                     $data["data_meta"] = $query->result_array();
                  } else {
                     $data["data_meta"] = array(
                                  array('meta' => 0)
                              );
                   }
    
             $this->load->view('mapa/index', $data);

        } else {
            redirect(base_url());
        }
    }
    public function mapa()
    {

        if ($this->session->userdata('user')) {
            $data["user"] = $this->session->user;
            $data["departamentos"] = get_departamentos();

             if ($this->session->user["es_municipal"]) {
                $ubigeo = $this->session->user["ubigeos"];
                $data["provincias"] = get_provincias($ubigeo["coddpto"]);
                $data["distritos"] = get_distritos($ubigeo["coddpto"], $ubigeo["codprov"]);
                $data["centros_poblado"] = get_centro_poblado($ubigeo["iddist"]);
                $query = $this->db->query("select meta as meta  from tb_hogares_meta2024 where ubigeo='".$ubigeo["iddist"]."'");
                 if ($query->num_rows() > 0) {
                     $data["data_meta"] = $query->result_array();
                  } else {
                     $data["data_meta"] = array(
                                  array('meta' => 0)
                              );
                   }             
               } 

             $this->load->view('mapa/index', $data);


        } else {
            redirect(base_url());
        }
    }

    

    public function get_fotos_du($foto,$ubig){

      if ($this->session->userdata('user')) {

        $data["user"] = $this->session->user;        
        $ubi = substr($ubig, 1);
         
        $ftpServer = '10.10.10.15';
        $ftpUsername = 'midis_ftpqa';
        $ftpPassword = 'q42o23m1D15';
        $ftpPort = 21;
        $ftpPath = '/ftp/midis_ftpqa/MOBILE/agsisfoh/'.$ubi.'/2024/'.$foto.'';

        $ftpConnection = ftp_connect($ftpServer,$ftpPort);
        if (!$ftpConnection) {
            die("No se pudo establecer la conexion FTP");
        }
        $loginResult = ftp_login($ftpConnection, $ftpUsername, $ftpPassword);
        if (!$loginResult) {
            die("La autenticación FTP fallo");
        }

        if (ftp_get($ftpConnection, 'media/'.$foto.'', $ftpPath, FTP_BINARY)) {
            // Obtener los datos de la imagen en base64
            $imageDataBase64 = base64_encode(file_get_contents('media/'.$foto.''));
            ftp_close($ftpConnection);
            $response = array('imagen' => $imageDataBase64);
            echo json_encode($response);
            unlink('media/'.$foto.'');
        } else {
            echo "Error al descargar la imagen desde FTP";
            ftp_close($ftpConnection);
        }

        } else {
            redirect(base_url());
        }
    }


    /************************descargar mapa*****************************************/

        
 
      /* ================GEO CODE DIRECCICON ===================================*/

    public function get_vias_wiguet(){

      $nombre_vias = strtoupper($this->input->post("query"));

      $data["user"] = $this->session->user;
      $ubigeos = $this->session->user["ubigeos"];
      $ubigeo=$ubigeos["iddist"];
      $html = '';

     if(isset($nombre_vias)){  

        $sql = "SELECT  * FROM tb_direcciones_nro WHERE direccion_completa LIKE '%".$nombre_vias."%' and ubigeo='".$ubigeo."' LIMIT 10";  
        $result = $this->db->query($sql)->result_array();
        if(count($result)>0){

           foreach ($result as $r) {
                $html .= '<div><a class="suggest-element" lat="'.$r["y"].'" long="'.$r["x"].'" data="'.utf8_encode($r["direccion_completa"]).'" id="'.$r["id"].'">'.utf8_encode($r["direccion_completa"]).'</a></div>';   
            }
          }
        echo $html;
       }
     }

     public function get_vias_wiguet_ccpp(){

      $nombre_ccpp = strtoupper($this->input->post("query"));

      $data["user"] = $this->session->user;
      $html = '';

     if(isset($nombre_ccpp)){  

        $sql = "SELECT  * FROM tb_centro_poblado WHERE centropoblado LIKE '%".$nombre_ccpp."%' LIMIT 10";  
        $result = $this->db->query($sql)->result_array();
        if(count($result)>0){

           foreach ($result as $r) {
                $html .= '<div><a class="suggest-element" lat="'.$r["long"].'" long="'.$r["lat"].'" data="'.utf8_encode($r["centropoblado"]).'" id="'.$r["id"].'">'.utf8_encode($r["distrito"]).'-'.utf8_encode($r["centropoblado"]).'</a></div>';   
            }
          }
        echo $html;
       }
     }



   public function get_vias_geoloc(){

      $via_nombre_nro = strtoupper($this->input->post("query"));

      $data["user"] = $this->session->user;
      $ubigeos = $this->session->user["ubigeos"];
      $ubigeo=$ubigeos["iddist"];

     if(isset($via_nombre_nro)){  

      $sql="SELECT  * FROM tb_direcciones_nro WHERE direccion_completa LIKE '%".$via_nombre_nro."%' and ubigeo='".$ubigeo."' LIMIT 1";
      $result = $this->db->query($sql)->result_array();
      echo json_encode($result, JSON_NUMERIC_CHECK);       

      }

    }

    public function provincias($ccdd = "00")
    {   
        $data["user"] = $this->session->user;
        $listadoRoles = $this->session->user["listadoRoles"];
        $valrolid=$listadoRoles['0']["idRol"];
        header('Content-Type: application/json');
        $data = get_provincias($ccdd,$valrolid);
        echo json_encode($data);
    }
    public function distritos($ccdd = "00", $ccpp = "00")
    {   
        $data["user"] = $this->session->user;
        $listadoRoles = $this->session->user["listadoRoles"];
        $valrolid=$listadoRoles['0']["idRol"];
        header('Content-Type: application/json');
        $data = get_distritos($ccdd, $ccpp,$valrolid);
        echo json_encode($data);
    }
    public function centro_pob($iddist = "00")
    {
        header('Content-Type: application/json');
        $data = get_centro_poblado($iddist);
        echo json_encode($data);
    }

    

    public function get_dato_meta($iddists)
      {

         $ubi_meta = substr($iddists, 1);
         $query = $this->db->query("select meta as meta  from tb_hogares_meta2024 where  ubigeo='".$ubi_meta."'");
                 if ($query->num_rows() > 0) {
                     $data["data_meta"] = $query->result_array();
                  } else {
                     $data["data_meta"] = array(
                                  array('meta' => 0)
                              );
                   }       

        echo json_encode($data);

      }
    

   

}
