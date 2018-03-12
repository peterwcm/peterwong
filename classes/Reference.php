<?php

class Reference {
  var $name;
  var $title;
  var $company;
  var $phone;
  var $email;
  var $active;

  public function getName() {
    return $this->name;
  }

  public function getTitle() {
    return $this->title;
  }

  public function getCompany() {
    return $this->company;
  }

  public function getPhone() {
    return $this->phone;
  }

  public function getEmail() {
    return $this->email;
  }

  public function getActive() {
    return $this->active;
  }

  function __construct($name, $title, $company, $phone, $email, $active = TRUE) {
    $this->name = $name;
    $this->title = $title;
    $this->company = $company;
    $this->phone = $phone;
    $this->email = $email;
    $this->active = $active;
  }
}
