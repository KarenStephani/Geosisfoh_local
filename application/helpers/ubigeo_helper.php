<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


if ( ! function_exists('get_departamentos'))
{
    function get_departamentos($rolid=null) {
        $CI =& get_instance();
        $CI->load->model('Admin_model');
        $query = "SELECT coddpto,nom_dpto  FROM tb_distritos";
        if (!is_null($rolid) and ($rolid!='125' and $rolid!='124')) {
            $query = $query." WHERE iddist in (select ubigeo from tb_usuarios_ambito where rolid='".$rolid."')";
        }
        $departamentos = $CI->Admin_model->raw($query." GROUP BY coddpto,nom_dpto ORDER BY coddpto", true);

        return $departamentos;
    }
}

if ( ! function_exists('get_provincias'))
{
    function get_provincias($coddpto=null,$rolid=null) {
        $CI =& get_instance();
        $CI->load->model('Admin_model');
        $query = "SELECT coddpto,nom_dpto,codprov,nom_prov  FROM tb_distritos";
        if (!is_null($coddpto)) {
            $query = $query." WHERE coddpto='".$coddpto."'";
        }
         if (!is_null($rolid) and ($rolid!='125' and $rolid!='124')) {
            $query = $query." AND iddist in (select ubigeo from tb_usuarios_ambito where rolid='".$rolid."')";
        }
        $provincias = $CI->Admin_model->raw($query." GROUP BY coddpto,nom_dpto,codprov,nom_prov ORDER BY coddpto", true);
        return $provincias;
    }
}

if ( ! function_exists('get_distritos'))
{
    function get_distritos($coddpto=null, $codprov=null,$rolid=null) {
        $CI =& get_instance();
        $CI->load->model('Admin_model');
        $query = "SELECT iddist,nombre_dist FROM tb_distritos";
        if (!is_null($coddpto) and !is_null($codprov)) {
            $query = $query." WHERE coddpto='".$coddpto."' AND codprov='".$codprov."'";
        }
        if (!is_null($rolid) and ($rolid!='125' and $rolid!='124')) {
            $query = $query." AND iddist in (select ubigeo from tb_usuarios_ambito where rolid='".$rolid."')";
        }
        $distritos = $CI->Admin_model->raw($query." ORDER BY iddist", true);
        return $distritos;
    }
}


if ( ! function_exists('get_centro_poblado'))
{
    function get_centro_poblado($iddist=null) {
        $CI =& get_instance();
        $CI->load->model('Admin_model');

        if (!is_null($iddist)) {
            $query = "SELECT codccpp,centropoblado FROM tb_centro_poblado WHERE coddist='".$iddist."'";
            return $CI->Admin_model->raw($query." ORDER BY centropoblado", true);
        }
        return null;
    }
}






