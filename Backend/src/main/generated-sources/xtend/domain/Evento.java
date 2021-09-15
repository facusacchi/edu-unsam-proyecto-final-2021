package domain;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@SuppressWarnings("all")
public class Evento {
  @Id
  @GeneratedValue
  private Long id;
  
  private String nombre;
}
