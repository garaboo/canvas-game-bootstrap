/**
 * A sound pool to use for the sound effects
 */
function SoundPool(maxSize) {
	var size = maxSize; // Max bullets allowed in the pool
	var pool = [];
	this.pool = pool;
	var currSound = 0;

	/*
	 * Populates the pool array with the given object
	 */
	this.init = function(object) {
		if (object == "laser") {
			for (var i = 0; i < size; i++) {
				// Initalize the object
				laser = new Audio("sounds/laser.wav");
				laser.volume = .12;
				laser.load();
				pool[i] = laser;
			}
		}
		else if (object == "explosion") {
			for (var i = 0; i < size; i++) {
				var explosion = new Audio("sounds/explosion.wav");
				explosion.volume = .18;
				explosion.load();
				pool[i] = explosion;
			}
		}
        if (object == "gun") {
			for (var i = 0; i < size; i++) {
				// Initalize the object
				var gun = new Audio("sounds/gun.mp3");
				gun.volume = .18;
				gun.load();
				pool[i] = gun;
			}
		}
	};

	/*
	 * Plays a sound
	 */
	this.get = function() {
		if(pool[currSound].currentTime == 0 || pool[currSound].ended) {
			pool[currSound].play();
		}
		currSound = (currSound + 1) % size;
	};
}
