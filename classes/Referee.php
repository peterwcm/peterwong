<?php

class Referee {
  var $name;
  var $title;
  var $company;
  var $phone;
  var $email;

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

  function __construct($name, $title, $company, $phone, $email) {
    $this->name = $name;
    $this->title = $title;
    $this->company = $company;
    $this->phone = $phone;
    $this->email = $email;
  }
}
