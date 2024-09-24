const Skill = require('../models/Skill.js');

const SkillController = {
    createNewSkill: async (req,res) => {
        try {
            const newSkill = await Skill.create(req.body);
            console.log(`[SkillController:createNewSkill()]: ${newSkill} added.`);
            res.status(201).json(newSkill);
        } catch(err) {
            res.status(400).json({error: '[SkillController:createNewSkill()]: An error occured.'});
        }
    },

    getSkillInfo: async (req, res) => {
    },

};
