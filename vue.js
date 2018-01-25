
var app = new Vue ({
    el: "#app",
    data: {
        Session: 25,
        BreakTime: 5   
    },
    methods: {
        AddToSession: function() {
             return this.Session++;
        },

        SubtractFromSession: function () {
            if (this.Session > 1) 
            return this.Session--;
        }, 

        AddToBreakTime: function() {
             return this.BreakTime++;
        },

        SubtractFromBreakTime: function () {
            if (this.BreakTime > 1) 
            return this.BreakTime--;
        }, 

        Reset: function () {
            return (this.Session = 25, this.BreakTime = 5)
        },

        StartCountdown: function () {
            var t = this.Session;
            var seconds = t * 60;
            var minutes = t;
            var hours = t % 60;
            setInterval(function() {
                this.Pomodoro.seconds
            })
            
        }
    },
    computed: {
        Pomodoro: function () {
            var s = this.Session;
            var p = {
                hours: s % 60
            } 

            
            p.minutes = (s - (p.hours * 60)) % 60;
            p.seconds = (s * 60 % 60) - (p.minutes * 60);
            // if (p.seconds == null) {
            //     p.seconds = "00"
            // }
            // if (p.minutes == null) {
            //     p.minutes = "00"
            // }
            if (!p.hours) {
                return p.minutes + ':' + p.seconds
            }
            else
            return p.hours + ':' + p.minutes + ':' + p.seconds;
        }
        //Session:
        // Clear: window.clearTimeout (this.data.Session)

    }
});

Vue.config.devtools = true;


Vue.use(Vuetify, {
    theme: {
        primary: '#c62828',
        secondary: '#ff5f52',
        accent: '#8e0000',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    }
  });
