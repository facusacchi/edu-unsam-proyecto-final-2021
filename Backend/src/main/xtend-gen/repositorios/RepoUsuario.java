package repositorios;

import domain.Usuario;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

@SuppressWarnings("all")
public class RepoUsuario extends RepoGenerico<Usuario> {
  private static RepoUsuario instance;
  
  public static RepoUsuario getInstance() {
    RepoUsuario _xifexpression = null;
    if ((RepoUsuario.instance == null)) {
      RepoUsuario _repoUsuario = new RepoUsuario();
      return RepoUsuario.instance = _repoUsuario;
    } else {
      _xifexpression = RepoUsuario.instance;
    }
    return _xifexpression;
  }
  
  public Class<Usuario> getEntityType() {
    return Usuario.class;
  }
  
  public void generateWhere(final CriteriaBuilder criteria, final CriteriaQuery<Usuario> query, final Root<Usuario> camposUsuario, final Usuario usuario) {
  }
  
  public void generateWhereId(final CriteriaBuilder criteria, final CriteriaQuery<Usuario> query, final Root<Usuario> camposUsuario, final Long id) {
  }
}
