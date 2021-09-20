package domain;

import javax.persistence.Entity;
import org.eclipse.xtend.lib.annotations.Accessors;
import org.eclipse.xtext.xbase.lib.Pure;

@Entity
@Accessors
@SuppressWarnings("all")
public class Supervisor extends Usuario {
  private boolean habilitado;
  
  @Pure
  public boolean isHabilitado() {
    return this.habilitado;
  }
  
  public void setHabilitado(final boolean habilitado) {
    this.habilitado = habilitado;
  }
}
