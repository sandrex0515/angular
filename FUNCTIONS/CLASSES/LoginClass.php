<?php
require_once('ClassParent.php');



class userLogin extends ClassParent{
            var $userid = null;
            var $password = null;

             public function __construct(
                $userid = '',
                $password = ''
                
            ){
                $fields = get_defined_vars();
                
                if(empty($fields))
                {
                    return(FALSE);
              }



              foreach($fileds as $k=>$v){
                  $this->$k = pg_escape_string(trim(strip_tags($v)));
              }
              return(TRUE);
            }

    public function login(){
        $sql = <<<EOT
            select
               *
            from usertbl where userid = '$this->userid'
            
EOT;

            


            return ClassParent::get($sql);

    }


}


?>