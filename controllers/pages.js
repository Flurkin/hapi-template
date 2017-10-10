
/**
 * Handles a call to / and shows some text with links to login and registration
 */
exports.index = {
	handler: function (request, reply) {
		return reply.view('index');
	}
};

/**
 * Handles a call to /login and shows a login form
 */
exports.login = {
	handler: function (request, reply) {
   		return reply.view('login');
	}
};

/**
 * Handles a call to /register and shows a registration form
 */
exports.register = {
	handler: function (request, reply) {
		return reply.view('register');
	}
};
