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

	override generateWhere(CriteriaBuilder criteria, CriteriaQuery<Usuario> query, Root<Usuario> camposUsuario,
		Usuario usuario) {
//		if (usuario.nombre !== null) {
//			query.where(criteria.equal(camposUsuario.get("nombre"), usuario.nombre))
//		}
	}

	override generateWhereId(CriteriaBuilder criteria, CriteriaQuery<Usuario> query, Root<Usuario> camposUsuario,
		Long id) {
//		if (id !== null) {
//			query.where(criteria.equal(camposUsuario.get("id"), id))
//		}
	}
	
}