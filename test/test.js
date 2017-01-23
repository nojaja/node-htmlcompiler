
window['Reactlabel'] = React.createClass({
  render: function() {
    return React.createElement('div',null,
	React.createElement('span',{ 'className':'uk-label'},
		this.props.label
	),
	React.createElement('label',{ 'id':'caption'},
		store.getState().main.message
	)
)
  }

});	
window['Reactinput'] = React.createClass({
  render: function() {
    return React.createElement('div',null,
	React.createElement('span',{ 'className':'uk-label'},
		this.props.label
	),
	React.createElement('input',{ 'id':'message','className':'uk-input','value':store.getState().main.message,'onChange':this.handleChange})
)
  }
,
   handleChange:function(e) {
    TestAction.change(e.target.value);
  }
  
});	
window['Reactbutton'] = React.createClass({
  render: function() {
    return React.createElement('a',{ 'className':'uk-button uk-button-default','href':this.props.href},
	this.props.label
)
  }

});	
window['Reactmargin'] = React.createClass({
  render: function() {
    return React.createElement('p',{ },
	this.props.children
)
  }

});	
window['Reactcard'] = React.createClass({
  render: function() {
    return React.createElement('div',null,
	React.createElement('div',{ 'className':'uk-card uk-card-primary uk-card-hover'},
		React.createElement('div',{ 'className':'uk-card-body'},
			React.createElement('h3',{ 'className':'uk-card-title'},
				this.props.title
			),
			this.props.children
		)
	)
)
  }

});