export const timeUtils = {
    data: () => ({}),
    created: function () {
    },
    methods: {
        getWeekDaysArray: function () {
            var weekDays = new Array(7);
            weekDays[0] = "Su";
            weekDays[1] = "M";
            weekDays[2] = "Tu";
            weekDays[3] = "W";
            weekDays[4] = "Th";
            weekDays[5] = "F";
            weekDays[6] = "Sa";
            return weekDays
        },
        getStartOfDayMillis() {
            var now = new Date();
            now.setUTCHours(0, 0, 0, 0);
            return now.getTime()
        },
        get7DaysBeforeTodayMillis() {
            var now = new Date();
            now.setDate(now.getDate() - 6)
            now.setUTCHours(0, 0, 0, 0);
            return now.getTime()
        },


    }

}