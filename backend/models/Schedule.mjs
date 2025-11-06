import mongoose from 'mongoose';


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
        kortabla :[{
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
        } 

    },
    {timestamps: true}
)

const ScheduleModel = mongoose.model('schedule', scheduleSchema);

export default ScheduleModel;

