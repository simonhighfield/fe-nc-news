import { voteOnArticle } from "./api"

export default function handleVote(currentArticle, voteDirection, hasVoted, setHasVoted, currentVotes, setCurrentVotes) {
    if (voteDirection === "up" && hasVoted === "") {
        setCurrentVotes(currentVotes + 1)
        setHasVoted("up")
        voteOnArticle(currentArticle.article_id, 1).catch((err) => {
            setIsError(true)
            setCurrentVotes(currentVotes - 1)
        })
    }

    if (voteDirection === "up" && hasVoted === "up") {
        setCurrentVotes(currentVotes - 1)
        setHasVoted("")
        voteOnArticle(currentArticle.article_id, -1).catch((err) => {
            setIsError(true)
            setCurrentVotes(currentVotes - 1)
        })
    }

    if (voteDirection === "up" && hasVoted === "down") {
        setCurrentVotes(currentVotes + 2)
        setHasVoted("up")
        voteOnArticle(currentArticle.article_id, 2).catch((err) => {
            setIsError(true)
            setCurrentVotes(currentVotes + 2)
        })
    }

    if (voteDirection === "down" && hasVoted === "") {
        setCurrentVotes(currentVotes - 1)
        setHasVoted("down")
        voteOnArticle(currentArticle.article_id, - 1).catch((err) => {
            setIsError(true)
            setCurrentVotes(currentVotes + 1)
        })
    }

    if (voteDirection === "down" && hasVoted === "down") {
        setCurrentVotes(currentVotes + 1)
        setHasVoted("")
        voteOnArticle(currentArticle.article_id, 1).catch((err) => {
            setIsError(true)
            setCurrentVotes(currentVotes + 1)
        })
    }

    if (voteDirection === "down" && hasVoted === "up") {
        setCurrentVotes(currentVotes - 2)
        setHasVoted("down")
        voteOnArticle(currentArticle.article_id, -2).catch((err) => {
            setIsError(true)
            setCurrentVotes(currentVotes - 2)
        })
    }
}