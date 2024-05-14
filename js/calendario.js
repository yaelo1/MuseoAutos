$(document).ready(function() {
    $('#calendario').fullCalendar({
    eventColor: 'orange',
      events: [ 
        {
          title: 'Exposición del día de las madres',
          start: '2024-05-10', 
          end: '2024-05-12'
        },
        {
          title: 'Exposición benéfica',
          start: '2024-05-20', 
          end: '2024-05-22' 
        }
        
      ]
    });
  });