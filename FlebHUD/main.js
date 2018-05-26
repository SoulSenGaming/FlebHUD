// FlebHUD

var FlebHUD = new Display();

FlebHUD.setBackground("per line");
FlebHUD.setRenderLoc(5, 5);
FlebHUD.setLine(0, "&1Fleb&8HUD");

register("tick", function() {
  FlebHUD.setLine(1, Math.round(Player.getX()) + "&2x &r" + Math.round(Player.getY()) + "&2y &r" + Math.round(Player.getZ()) + "&2z &r"); 
});

register("tick", function() {
  FlebHUD.setLine(2, "&2Ping: " + Server.getPing());
});

// FlebCPS
var FlebCPS = new Display();

FlebCPS.setBackground("per line");
FlebCPS.setRenderLoc(Renderer.screen.getWidth() - 235 , 340);

register("tick", function() {
  FlebCPS.setLine(0, "&2CPS: " + CPS.getLeftClicks() + " : " + CPS.getRightClicks());
});

// Auto Sprint (Just To Save Time, Took It From Auto Sprint Module)

var sprinting = true;
var KeyBinding = Java.type("net.minecraft.client.settings.KeyBinding");
var toggle = new KeyBind("Toggle Sprint", Keyboard.KEY_F);

var key = Client.getMinecraft().field_71474_y.field_151444_V.func_151463_i();

register("renderOverlay", "SprintOverlay");
register("tick", "SprintTick");
function SprintTick() {
	if(toggle.isPressed()) {
		sprinting = !sprinting;
		if(!sprinting) {
			if(key > 0) {
				KeyBinding.func_74510_a(key, Keyboard.isKeyDown(key));
			}
		}
	}
	if(sprinting) {
		KeyBinding.func_74510_a(key, true);
	}
}

function SprintOverlay() {
	if(!sprinting) return;
	
	var width = Renderer.screen.getWidth();
	var height = Renderer.screen.getHeight();
	
	Renderer.drawString("&0[&1FlebAURA Toggled&0]&r", Renderer.screen.getWidth() - 97 , 5);
}