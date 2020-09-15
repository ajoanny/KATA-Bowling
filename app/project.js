class Project {

    calculateScore(list) {
        let result = 0;
        return list.forEach(score => {
            result += score
        })
        return result;
    }

}

module.exports = Project
