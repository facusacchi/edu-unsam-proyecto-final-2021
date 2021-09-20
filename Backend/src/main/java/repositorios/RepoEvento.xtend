package repositorios

import domain.Evento
import javax.persistence.criteria.CriteriaBuilder
import javax.persistence.criteria.CriteriaQuery
import javax.persistence.criteria.Root

class RepoEvento extends RepoGenerico<Evento> {
	static RepoEvento instance

	def static getInstance() {
		if (instance === null) {
			return instance = new RepoEvento
		} else {
			instance
		}
	}

	override getEntityType() {
		Evento
	}

	override generateWhere(CriteriaBuilder criteria, CriteriaQuery<Evento> query, Root<Evento> camposObjetoT, Evento t) {
	}
	
	override generateWhereId(CriteriaBuilder criteria, CriteriaQuery<Evento> query, Root<Evento> camposObjetoT, Long id) {
	}
	
	

}