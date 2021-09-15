package domain;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import org.eclipse.xtend.lib.annotations.Accessors;
import org.eclipse.xtext.xbase.lib.Pure;

@Accessors
@SuppressWarnings("all")
public class Log {
  @Id
  @GeneratedValue
  private Long id;
  
  @Column(name = "idEvento", insertable = false, updatable = false)
  private Long idEvento;
  
  private LocalDate fechaYHora;
  
  @Pure
  public Long getId() {
    return this.id;
  }
  
  public void setId(final Long id) {
    this.id = id;
  }
  
  @Pure
  public Long getIdEvento() {
    return this.idEvento;
  }
  
  public void setIdEvento(final Long idEvento) {
    this.idEvento = idEvento;
  }
  
  @Pure
  public LocalDate getFechaYHora() {
    return this.fechaYHora;
  }
  
  public void setFechaYHora(final LocalDate fechaYHora) {
    this.fechaYHora = fechaYHora;
  }
}
