package runnable;

import bootstrap.BoostrapAppcessTracker;
import controllers.ControllerUsuarios;
import org.uqbar.xtrest.api.XTRest;

@SuppressWarnings("all")
public class AppcessTracker {
  public static void main(final String[] args) {
    new BoostrapAppcessTracker().run();
    XTRest.start(9000, ControllerUsuarios.class);
  }
}
