<?php
require_once('ClassParent.php');


class newUser extends ClassParent{

        var $name = null;
        var $password = null;
        var $email = null;
        var $address = null;
        var $contact = null;
        var $userid = null;
        
        public function __construct(
                        
                    $name = '',
                    $password = '',
                    $email = '',
                    $address = '',
                    $contact = '',
                    $userid = ''


        ){
            $haspwd = password_hash($password, PASSWORD_DEFAULT);//password_verify ->to verify hashed password
            $fields = get_defined_vars();
            if(empty($fields)){
                return(FALSE);
            }
            
            foreach($fields as $k=>$v){
                $this->$k = pg_escape_string(trim(strip_tags($v)));
            }
        
            return(TRUE);
        }
        public function save(){
            $sql = <<<EOT
            insert into usertbl
      (
              name,
              password,
              email,
              address,
              contact,
              userid
  
      )
      values
      (
          '$this->name',
          '$this->haspwd',
          '$this->email',
          '$this->address',
          '$this->contact',
          '$this->userid'
          
      )
      
EOT;
           return ClassParent::insert($sql);
        }

        public function fetch(){
            $sql = <<<EOT

        select 
            id,
            name,
            email,
            address,
            contact
            from usertbl
            order by name asc
EOT;
            return ClassParent::get($sql);
        }
        
    }




?>