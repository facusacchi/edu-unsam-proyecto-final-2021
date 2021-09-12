package repositorios;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceException;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import org.eclipse.xtext.xbase.lib.Exceptions;
import org.eclipse.xtext.xbase.lib.ObjectExtensions;
import org.eclipse.xtext.xbase.lib.Procedures.Procedure1;

@SuppressWarnings("all")
public abstract class RepoGenerico<T extends Object> {
  private static final EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("appcesstracker");
  
  public List<T> allInstances() {
    List<T> _xblockexpression = null;
    {
      final EntityManager entityManager = this.getEntityManager();
      List<T> _xtrycatchfinallyexpression = null;
      try {
        List<T> _xblockexpression_1 = null;
        {
          final CriteriaBuilder criteria = entityManager.getCriteriaBuilder();
          final CriteriaQuery<T> query = criteria.<T>createQuery(this.getEntityType());
          final Root<T> from = query.<T>from(this.getEntityType());
          query.select(from);
          _xblockexpression_1 = entityManager.<T>createQuery(query).getResultList();
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
  
  public abstract Class<T> getEntityType();
  
  public List<T> searchByExample(final T t) {
    List<T> _xblockexpression = null;
    {
      final EntityManager entityManager = this.getEntityManager();
      List<T> _xtrycatchfinallyexpression = null;
      try {
        List<T> _xblockexpression_1 = null;
        {
          final CriteriaBuilder criteria = entityManager.getCriteriaBuilder();
          final CriteriaQuery<T> query = criteria.<T>createQuery(this.getEntityType());
          final Root<T> from = query.<T>from(this.getEntityType());
          query.select(from);
          this.generateWhere(criteria, query, from, t);
          _xblockexpression_1 = entityManager.<T>createQuery(query).getResultList();
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
  
  public T searchById(final Long id) {
    T _xblockexpression = null;
    {
      final EntityManager entityManager = this.getEntityManager();
      final CriteriaBuilder criteria = entityManager.getCriteriaBuilder();
      final CriteriaQuery<T> query = criteria.<T>createQuery(this.getEntityType());
      final Root<T> from = query.<T>from(this.getEntityType());
      query.select(from);
      this.generateWhereId(criteria, query, from, id);
      _xblockexpression = entityManager.<T>createQuery(query).getSingleResult();
    }
    return _xblockexpression;
  }
  
  public abstract void generateWhere(final CriteriaBuilder criteria, final CriteriaQuery<T> query, final Root<T> camposObjetoT, final T t);
  
  public abstract void generateWhereId(final CriteriaBuilder criteria, final CriteriaQuery<T> query, final Root<T> camposObjetoT, final Long id);
  
  public EntityManager create(final T t) {
    EntityManager _xblockexpression = null;
    {
      final EntityManager entityManager = this.getEntityManager();
      EntityManager _xtrycatchfinallyexpression = null;
      try {
        final Procedure1<EntityManager> _function = new Procedure1<EntityManager>() {
          public void apply(final EntityManager it) {
            it.getTransaction().begin();
            it.persist(t);
            it.getTransaction().commit();
          }
        };
        _xtrycatchfinallyexpression = ObjectExtensions.<EntityManager>operator_doubleArrow(entityManager, _function);
      } catch (final Throwable _t) {
        if (_t instanceof PersistenceException) {
          final PersistenceException e = (PersistenceException)_t;
          e.printStackTrace();
          entityManager.getTransaction().rollback();
          throw new RuntimeException("Ocurrió un error, la operación no puede completarse", e);
        } else {
          throw Exceptions.sneakyThrow(_t);
        }
      } finally {
        if (entityManager!=null) {
          entityManager.close();
        }
      }
      _xblockexpression = _xtrycatchfinallyexpression;
    }
    return _xblockexpression;
  }
  
  public EntityManager update(final T t) {
    EntityManager _xblockexpression = null;
    {
      final EntityManager entityManager = this.getEntityManager();
      EntityManager _xtrycatchfinallyexpression = null;
      try {
        final Procedure1<EntityManager> _function = new Procedure1<EntityManager>() {
          public void apply(final EntityManager it) {
            it.getTransaction().begin();
            it.<T>merge(t);
            it.getTransaction().commit();
          }
        };
        _xtrycatchfinallyexpression = ObjectExtensions.<EntityManager>operator_doubleArrow(entityManager, _function);
      } catch (final Throwable _t) {
        if (_t instanceof PersistenceException) {
          final PersistenceException e = (PersistenceException)_t;
          e.printStackTrace();
          entityManager.getTransaction().rollback();
          throw new RuntimeException("Ocurrió un error, la operación no puede completarse", e);
        } else {
          throw Exceptions.sneakyThrow(_t);
        }
      } finally {
        if (entityManager!=null) {
          entityManager.close();
        }
      }
      _xblockexpression = _xtrycatchfinallyexpression;
    }
    return _xblockexpression;
  }
  
  public EntityManager getEntityManager() {
    return RepoGenerico.entityManagerFactory.createEntityManager();
  }
}
