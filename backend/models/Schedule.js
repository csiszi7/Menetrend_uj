const mongoose = require('mongoose');


const scheduleSchema = new mongoose.Schema(
    {
        jarat: {
            type: String,
            required: true,
        },
        induloallomas: {
            type: String,
            required: true,
        },
        allomasok: [
            {
                type: String,
                required: true,
            }
        ],
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
        kedvezmeny: {
            type: String,
            required: true
        },
        kortablak :[{
            type: String,
            required: true
        }],
        idotartam: [{
            type: String,
            required: true
        
        }],
        klima: {
            type: Boolean,
            default: false
        },
        helyjegy: {
            type: Boolean,
            default: false
        },
        kepek: [{
            type: String,
        }] 
    },
    {timestamps: true}
)

const ScheduleModel = mongoose.model('schedule', scheduleSchema);

module.exports = ScheduleModel;

