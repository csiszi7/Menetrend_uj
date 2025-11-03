const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema(
    {
        tipus: {
            type: String,
            required: true,
        },
        induloallomas: {
            type: String,
            required: true,
        },
            celallomas: {
            type: String,
            required: true,
        },
        idopontok: [
            {
                type: String,
                required: true,
            }
        ],
        allomasok: [
            {
                type: String,
                required: true,
            }
        ],
        kedvezmeny: {
            type: String,
            required: true
        },
        kortabla: {
            type: String,
            required: true
        },
        idotartam: {
            type: String,
            required: true
        
        },
        indulasideje: {
            type: String,
            required: true
        
        },
        visszaideje: {
            type: String,
            required: true
        },
        klima: {
            type: Boolean,
            default: false
        },
        helyjegy: {
            type: Boolean,
            default: false
        }

    },
    {
        type: String,
        timestamps: true
    }

)

const ScheduleModel = mongoose.model('schedule', scheduleSchema);

module.exports = ScheduleModel;

