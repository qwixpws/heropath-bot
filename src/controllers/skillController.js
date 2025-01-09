const T = require('../test/testClass.js');
const Skill = require('../models/Skill.js');

const SkillController = {
    createSkillApi: async (req,res) => {
        try {
            const newSkill = await Skill.create(req.body);
            console.log(`[SkillController:createNewSkill()]: ${newSkill} added.`);
            res.status(201).json(newSkill);
        } catch(err) {
            res.status(400).json({error: '[SkillController:createNewSkill()]: An error occured.'});
        }
    },

    createSkill: async (userId, skillName, description) => {
        const testUserId = new T(userId);
        const testSkillName = new T(skillName);
        const testDescription = new T(description);
        testUserId.isType('number').notToBe('null').notToBe('undefined');
        testSkillName.isType('string').notToBe('null').notToBe('undefined').lengthIsLess(24).hasNotSpecialChars();
        testDescription.isType('string').lengthIsLess(255).hasNotSpecialChars();

        try {
            const newSkill = await Skill.create({
                name: skillName,
                created_by: userId,
                description: description || 'no description provided',
                isPublic: false
            });
            console.log(`[SkillController:createSkill()]: ${newSkill} added.`);
            return newSkill;
        } catch(err) {
            console.error(`ERROR: [SkillController:createSkill()]: ${err}`);
            return null;
        }
    }

    //getSkillInfo: async (req, res) => {
    //},

};
