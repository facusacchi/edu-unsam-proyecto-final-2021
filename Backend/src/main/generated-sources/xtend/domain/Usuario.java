package domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import org.eclipse.xtend.lib.annotations.Accessors;
import org.eclipse.xtext.xbase.lib.Pure;

@Accessors
@Entity
@SuppressWarnings("all")
public class Usuario {
  @Id
  @GeneratedValue
  private Long id;
  
  private String nombre;
  
  private String apellido;
  
  private String apodo;
  
  private String email;
  
  private String password;
  
  private String telefono;
  
  @Pure
  public Long getId() {
    return this.id;
  }
  
  public void setId(final Long id) {
    this.id = id;
  }
  
  @Pure
  public String getNombre() {
    return this.nombre;
  }
  
  public void setNombre(final String nombre) {
    this.nombre = nombre;
  }
  
  @Pure
  public String getApellido() {
    return this.apellido;
  }
  
  public void setApellido(final String apellido) {
    this.apellido = apellido;
  }
  
  @Pure
  public String getApodo() {
    return this.apodo;
  }
  
  public void setApodo(final String apodo) {
    this.apodo = apodo;
  }
  
  @Pure
  public String getEmail() {
    return this.email;
  }
  
  public void setEmail(final String email) {
    this.email = email;
  }
  
  @Pure
  public String getPassword() {
    return this.password;
  }
  
  public void setPassword(final String password) {
    this.password = password;
  }
  
  @Pure
  public String getTelefono() {
    return this.telefono;
  }
  
  public void setTelefono(final String telefono) {
    this.telefono = telefono;
  }
}
