package repositorios;

import domain.Usuario;
import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
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
  
  public Usuario autenticar(final String name, final String password) {
    Usuario _xblockexpression = null;
    {
      final EntityManager entityManager = this.getEntityManager();
      Usuario _xtrycatchfinallyexpression = null;
      try {
        Usuario _xblockexpression_1 = null;
        {
          final CriteriaBuilder criteria = entityManager.getCriteriaBuilder();
          final CriteriaQuery<Usuario> query = criteria.<Usuario>createQuery(this.getEntityType());
          final Root<Usuario> from = query.<Usuario>from(this.getEntityType());
          query.distinct(true);
          final Predicate nombreUsuario = criteria.equal(from.<Object>get("nombre"), name);
          final Predicate passwordUsuario = criteria.equal(from.<Object>get("password"), password);
          query.select(from).where(criteria.and(nombreUsuario, passwordUsuario));
          _xblockexpression_1 = entityManager.<Usuario>createQuery(query).getSingleResult();
        }
        _xtrycatchfinallyexpression = _xblockexpression_1;
      } finally {
        if (entityManager!=null) {
          entityManager.close();
        }
      }
      _xblockexpression = _xtrycatchfinallyexpression;
    }
    return _xblockexpression;
  }
  
  public void generateWhere(final CriteriaBuilder criteria, final CriteriaQuery<Usuario> query, final Root<Usuario> camposUsuario, final Usuario usuario) {
    String _nombre = usuario.getNombre();
    boolean _tripleNotEquals = (_nombre != null);
    if (_tripleNotEquals) {
      query.where(criteria.equal(camposUsuario.<Object>get("nombre"), usuario.getNombre()));
    }
  }
  
  public void generateWhereId(final CriteriaBuilder criteria, final CriteriaQuery<Usuario> query, final Root<Usuario> camposUsuario, final Long id) {
    if ((id != null)) {
      query.where(criteria.equal(camposUsuario.<Object>get("id"), id));
    }
  }
  
  public EntityManager actualizarUsuario(final Usuario usuario) {
    EntityManager _xblockexpression = null;
    {
      final Usuario usuarioPorActualizar = this.searchById(usuario.getId());
      usuarioPorActualizar.setApodo(usuario.getApodo());
      usuarioPorActualizar.setEmail(usuario.getEmail());
      usuarioPorActualizar.setPassword(usuario.getPassword());
      usuarioPorActualizar.setTelefono(usuario.getTelefono());
      _xblockexpression = this.update(usuarioPorActualizar);
    }
    return _xblockexpression;
  }
}
