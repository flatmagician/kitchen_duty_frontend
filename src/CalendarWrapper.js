import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
// import { EventCalendar } from 'react-event-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

export const CalendarWrapper = props => (
    <div className="calendarWrapper">
        <Calendar
            localizer={localizer}
            getNow={props.getNow}
            events={props.eventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            selectable={true}
            longPressThreshold={0}
            onSelectSlot={props.onSelecting}
        />
    </div>
)