package repositorios

import domain.Ubicacion
import javax.persistence.criteria.CriteriaBuilder
import javax.persistence.criteria.CriteriaQuery
import javax.persistence.criteria.Root

class RepoUbicacion extends RepoGenerico<Ubicacion> {
	static RepoUbicacion instance

	def static getInstance() {
		if (instance === null) {
			return instance = new RepoUbicacion
		} else {
			instance
		}
	}

	override getEntityType() {
		Ubicacion
	}
	
	override generateWhere(CriteriaBuilder criteria, CriteriaQuery<Ubicacion> query, Root<Ubicacion> camposObjetoT, Ubicacion t) {
	}
	
	override generateWhereId(CriteriaBuilder criteria, CriteriaQuery<Ubicacion> query, Root<Ubicacion> camposObjetoT, Long id) {
	}

}