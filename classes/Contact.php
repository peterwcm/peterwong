<?php

abstract class ContactType {
  const Link = 0;
  const Email = 1;
  const Phone = 2;
}

class Contact {
  var $name;
  var $icon;
  var $details;
  var $url;
  var $type;

  public function getName() {
    return $this->name;
  }

  public function getIcon() {
    return $this->icon;
  }

  public function getDetails() {
    return $this->details;
  }

  public function getUrl() {
    return $this->url;
  }

  public function getType() {
    return $this->type;
  }

  function __construct($name, $icon, $details, $url,
                       $type = ContactType::Link) {
    $this->name = $name;
    $this->icon = $icon;
    $this->details = $details;
    $this->url = $url;
    $this->type = $type;
  }
}
