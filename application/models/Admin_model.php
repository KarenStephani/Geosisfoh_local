<?php

class Admin_model extends CI_Model {

    private $insert_id = 0;

    public function __construct() {
        parent::__construct();
    }

    public function all($table) {
        $query = $this->db->get($table);
        return $query->result();
    }

    public function filter($table, $field = null, $filter = null, $as_array = false, $order_by=null) {
        if ($field != null) {
            $this->db->select($field);
        }
        $query = $this->db->get_where($table, $filter);
        if (is_string($order_by)) {
            $this->db->order_by($order_by); 
        }
        if ($as_array) {
            return $query->result_array();
        }
        return $query->result();
    }

    public function save($table, $data, $id = 0, $filter = null) {
        if ($id === 0) {
            $mensaje = $this->db->insert($table, $data);
            $this->insert_id = $this->db->insert_id();
            return $mensaje;
        } else {
            $this->db->where($filter);
            return $this->db->update($table, $data);
        }
    }

    public function destroy($table, $filter = null) {
        $this->db->delete($table, $filter);
    }

    public function get_insert_id() {
        return $this->insert_id;
    }

    public function raw($raw_query, $as_array = false) {
        $query = $this->db->query($raw_query);
        if (is_bool($query)) {
            return true;
        } else {
            if ($as_array) {
                return $query->result_array();
            }
            return $query->result();
        }
    }

    public function where_in($table, $field, $where_in, $by) {
        $this->db->where_in($by, $where_in);
        $this->db->select($field);
        return $this->db->get($table)->result_array();
    }
    

}
