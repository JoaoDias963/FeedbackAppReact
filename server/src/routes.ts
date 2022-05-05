import express from 'express';
import { SubmitFeedbackUseCase } from './use-cases/submitFeedbackUseCase';
import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbackRepository';
import { NodeMailerMailAdapter } from './adapters/nodemailer/nodemailerMailAdapter';

export const routes = express.Router();



routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerAdapter = new NodeMailerMailAdapter()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerAdapter,
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })

    return res.status(201).send();
})