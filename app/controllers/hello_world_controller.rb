# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @hello_world_props = { name: "Stranger" }
    @m = {text: ["Pratik", "Kamlesh"]}
    @todoList = { todos: [{
	    id: 0,
	    completed: false,
	    text: 'Initial todo for demo purposes'
	  }] }
  end

  def get_name
    @name = params[:name]
    # debugger
    #this is directly hit from rails form
  end
end
