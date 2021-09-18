package repositorios

import javax.persistence.criteria.CriteriaBuilder
import javax.persistence.criteria.CriteriaQuery
import javax.persistence.criteria.Root
import domain.Usuario

class RepoUsuario extends RepoGenerico<Usuario> {
	static RepoUsuario instance

	def static getInstance() {
		if (instance === null) {
			return instance = new RepoUsuario
		} else {
			instance
		}
	}

	override getEntityType() {
		Usuario
	}

	def Usuario autenticar(String name, String password) {
		val entityManager = this.entityManager
		try {
			val criteria = entityManager.criteriaBuilder
			val query = criteria.createQuery(entityType)
			val from = query.from(entityType)

			query.distinct(true)

			val nombreUsuario = criteria.equal(from.get("nombre"), name)
			val passwordUsuario = criteria.equal(from.get("password"), password)

			query.select(from).where(criteria.and(nombreUsuario, passwordUsuario))
			entityManager.createQuery(query).singleResult
		} finally {
			entityManager?.close
		}
	}

	override generateWhere(CriteriaBuilder criteria, CriteriaQuery<Usuario> query, Root<Usuario> camposUsuario, Usuario usuario) {
//		if (usuario.nombre !== null) {
//			query.where(criteria.equal(camposUsuario.get("nombre"), usuario.nombre))
//		}
	}

	override generateWhereId(CriteriaBuilder criteria, CriteriaQuery<Usuario> query, Root<Usuario> camposUsuario, Long id) {
//		if (id !== null) {
//			query.where(criteria.equal(camposUsuario.get("id"), id))
//		}
	}
	
	def actualizarUsuario(Usuario usuario) {
		val usuarioPorActualizar = this.searchById(usuario.id)
		usuarioPorActualizar.apodo = usuario.apodo
		usuarioPorActualizar.email = usuario.email
		usuarioPorActualizar.password = usuario.password
		usuarioPorActualizar.telefono = usuario.telefono
		update(usuarioPorActualizar)
	}
}