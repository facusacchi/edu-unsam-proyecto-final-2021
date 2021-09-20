package repositorios

import javax.persistence.EntityManagerFactory
import javax.persistence.Persistence
import java.util.List
import javax.persistence.criteria.CriteriaBuilder
import javax.persistence.criteria.CriteriaQuery
import javax.persistence.criteria.Root
import javax.persistence.PersistenceException

abstract class RepoGenerico<T> {

	static final EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("appcesstracker")

	def List<T> allInstances() {
		val entityManager = this.entityManager
		try {
			val criteria = entityManager.criteriaBuilder
			val query = criteria.createQuery(entityType)
			val from = query.from(entityType)
			query.select(from)
			entityManager.createQuery(query).resultList
		} finally {
			entityManager?.close
		}
	}

	abstract def Class<T> getEntityType()

	def searchByExample(T t) {
		val entityManager = this.entityManager
		try {
			val criteria = entityManager.criteriaBuilder
			val query = criteria.createQuery(entityType)
			val from = query.from(entityType)
			query.select(from)
			generateWhere(criteria, query, from, t)
			entityManager.createQuery(query).resultList
		} finally {
			entityManager?.close
		}
	}

	def searchById(Long id) {
		val entityManager = this.entityManager
//		try {
		val criteria = entityManager.criteriaBuilder
		val query = criteria.createQuery(entityType)
		val from = query.from(entityType)
		query.select(from)
		generateWhereId(criteria, query, from, id)
		entityManager.createQuery(query).singleResult
//		} finally {
//			entityManager?.close
//		}
	}

	abstract def void generateWhere(CriteriaBuilder criteria, CriteriaQuery<T> query, Root<T> camposObjetoT, T t)

	abstract def void generateWhereId(CriteriaBuilder criteria, CriteriaQuery<T> query, Root<T> camposObjetoT, Long id)

	def create(T t) {
		val entityManager = this.entityManager
		try {
			entityManager => [
				transaction.begin
				persist(t)
				transaction.commit
			]
		} catch (PersistenceException e) {
			e.printStackTrace
			entityManager.transaction.rollback
			throw new RuntimeException("Ocurrio un error, la operacion no puede completarse", e)
		} finally {
			entityManager?.close
		}
	}

	def update(T t) {
		val entityManager = this.entityManager
		try {
			entityManager => [
				transaction.begin
				merge(t)
				transaction.commit
			]
		} catch (PersistenceException e) {
			e.printStackTrace
			entityManager.transaction.rollback
			throw new RuntimeException("Ocurrio un error, la operacion no puede completarse", e)
		} finally {
			entityManager?.close
		}
	}

	def getEntityManager() {
		entityManagerFactory.createEntityManager
	}
}
