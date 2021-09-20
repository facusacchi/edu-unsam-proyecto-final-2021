package repositorios;

import domain.Ubicacion;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

@SuppressWarnings("all")
public class RepoUbicacion extends RepoGenerico<Ubicacion> {
  private static RepoUbicacion instance;
  
  public static RepoUbicacion getInstance() {
    RepoUbicacion _xifexpression = null;
    if ((RepoUbicacion.instance == null)) {
      RepoUbicacion _repoUbicacion = new RepoUbicacion();
      return RepoUbicacion.instance = _repoUbicacion;
    } else {
      _xifexpression = RepoUbicacion.instance;
    }
    return _xifexpression;
  }
  
  public Class<Ubicacion> getEntityType() {
    return Ubicacion.class;
  }
  
  public void generateWhere(final CriteriaBuilder criteria, final CriteriaQuery<Ubicacion> query, final Root<Ubicacion> camposObjetoT, final Ubicacion t) {
  }
  
  public void generateWhereId(final CriteriaBuilder criteria, final CriteriaQuery<Ubicacion> query, final Root<Ubicacion> camposObjetoT, final Long id) {
  }
}
