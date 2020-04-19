<?php
class Utilisateurs {
  
    // database connection and table name
    private $conn;
    private $table_name = "utilisateurs";
  
    // object properties
    public $username; // PRIMARY KEY
    public $passwordHashed;
    public $firstname;
    public $name;
    public $mail;
    public $phone;
  
    // constructor with $db as database connection
    public function __construct($db) {
        $this->conn = $db;
    }

    // read utilsitaeurs
    function read() {
    
        // select all query
        $query = "
            SELECT *
            FROM " . $this->table_name . "
            WHERE username=:username";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
        $this->username=htmlspecialchars(strip_tags($this->username));
        $stmt->bindParam(":username", $this->username);

        // execute query
        $stmt->execute();
    
        return $stmt;
    }

    function delete() {

        $query = "DELETE FROM 
                    " . $this->table_name . "
                    WHERE
                    username=:username";
        
        $stmt = $this->conn->prepare($query);

        $this->username=htmlspecialchars(strip_tags($this->username));
        
        $stmt->bindParam(":username", $this->username);

        // execute query
        if($stmt->execute()){
            return true;
        }

        return false;
    }

    // create product
    function create(){
    
        // query to insert record
        $query = "INSERT INTO
                    " . $this->table_name . "
                SET
                    username=:username, passwordHashed=:passwordHashed, firstname=:firstname, name=:name, mail=:mail, phone=:phone";
    
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->username=htmlspecialchars(strip_tags($this->username));
        $this->passwordHashed=htmlspecialchars(strip_tags($this->passwordHashed));
        $this->firstname=htmlspecialchars(strip_tags($this->firstname));
        $this->mail=htmlspecialchars(strip_tags($this->mail));
        $this->phone=htmlspecialchars(strip_tags($this->phone));
    
        // bind values
        $stmt->bindParam(":username", $this->username);
        $stmt->bindParam(":passwordHashed", $this->passwordHashed);
        $stmt->bindParam(":firstname", $this->firstname);
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":mail", $this->mail);
        $stmt->bindParam(":phone", $this->phone);
    
        // execute query
        if($stmt->execute()){
            return true;
        }

        return false;

    }

    // patch the product
function put(){
  
    // update query
    $query = "UPDATE
                " . $this->table_name . "
            SET
                passwordHashed = :passwordHashed,
                firstname = :firstname,
                name = :name,
                mail = :mail,
                phone = :phone
            WHERE
                username = :username";
  
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->username=htmlspecialchars(strip_tags($this->username));
        $this->passwordHashed=htmlspecialchars(strip_tags($this->passwordHashed));
        $this->firstname=htmlspecialchars(strip_tags($this->firstname));
        $this->mail=htmlspecialchars(strip_tags($this->mail));
        $this->phone=htmlspecialchars(strip_tags($this->phone));
    
        // bind values
        $stmt->bindParam(":username", $this->username);
        $stmt->bindParam(":passwordHashed", $this->passwordHashed);
        $stmt->bindParam(":firstname", $this->firstname);
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":mail", $this->mail);
        $stmt->bindParam(":phone", $this->phone);

        // execute the query
    if($stmt->execute()){
        return true;
    }
  
    return false;
}
}
?>