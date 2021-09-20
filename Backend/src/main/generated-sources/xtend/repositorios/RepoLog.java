package repositorios;

import domain.Filtro;
import domain.Log;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

@SuppressWarnings("all")
public class RepoLog extends RepoGenerico<Log> {
  private static RepoLog instance;
  
  public static RepoLog getInstance() {
    RepoLog _xifexpression = null;
    if ((RepoLog.instance == null)) {
      RepoLog _repoLog = new RepoLog();
      return RepoLog.instance = _repoLog;
    } else {
      _xifexpression = RepoLog.instance;
    }
    return _xifexpression;
  }
  
  public Object getLogsFiltrados(final Filtro filtros) {
    return null;
  }
  
  public Class<Log> getEntityType() {
    return Log.class;
  }
  
  public void generateWhere(final CriteriaBuilder criteria, final CriteriaQuery<Log> query, final Root<Log> camposObjetoT, final Log t) {
    throw new UnsupportedOperationException("TODO: auto-generated method stub");
  }
  
  public void generateWhereId(final CriteriaBuilder criteria, final CriteriaQuery<Log> query, final Root<Log> camposObjetoT, final Long id) {
    throw new UnsupportedOperationException("TODO: auto-generated method stub");
  }
}
