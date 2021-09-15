package runnable

import org.uqbar.xtrest.api.XTRest
import bootstrap.BoostrapAppcessTracker
import controllers.ControllerUsuarios

class AppcessTracker {
	
	def static void main(String[] args) {
		new  BoostrapAppcessTracker().run
		XTRest.start(9000, ControllerUsuarios)
	}
	
}