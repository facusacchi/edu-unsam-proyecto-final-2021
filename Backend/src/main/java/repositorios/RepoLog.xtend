package repositorios

import domain.Log
import domain.Filtro
import javax.persistence.criteria.CriteriaBuilder
import javax.persistence.criteria.CriteriaQuery
import javax.persistence.criteria.Root

class RepoLog extends RepoGenerico<Log> {
	static RepoLog instance

	def static getInstance() {
		if (instance === null) {
			return instance = new RepoLog
		} else {
			instance
		}
	}


	def getLogsFiltrados(Filtro filtros) {
		// En base a los filtros recibidos, agregar logica de filtrado y devolucion de lista de logs
	}

	override getEntityType() {
		Log
	}
	
	override generateWhere(CriteriaBuilder criteria, CriteriaQuery<Log> query, Root<Log> camposObjetoT, Log t) {
		throw new UnsupportedOperationException("TODO: auto-generated method stub")
	}
	
	override generateWhereId(CriteriaBuilder criteria, CriteriaQuery<Log> query, Root<Log> camposObjetoT, Long id) {
		throw new UnsupportedOperationException("TODO: auto-generated method stub")
	}
	
}