package repositorios;

import domain.Evento;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

@SuppressWarnings("all")
public class RepoEvento extends RepoGenerico<Evento> {
  private static RepoEvento instance;
  
  public static RepoEvento getInstance() {
    RepoEvento _xifexpression = null;
    if ((RepoEvento.instance == null)) {
      RepoEvento _repoEvento = new RepoEvento();
      return RepoEvento.instance = _repoEvento;
    } else {
      _xifexpression = RepoEvento.instance;
    }
    return _xifexpression;
  }
  
  public Class<Evento> getEntityType() {
    return Evento.class;
  }
  
  public void generateWhere(final CriteriaBuilder criteria, final CriteriaQuery<Evento> query, final Root<Evento> camposObjetoT, final Evento t) {
  }
  
  public void generateWhereId(final CriteriaBuilder criteria, final CriteriaQuery<Evento> query, final Root<Evento> camposObjetoT, final Long id) {
  }
}
