import {articles} from '../../../data'

export default function handler(req, res, next) {
  res.status(200).json(articles)
}