from flask_restful import Resource
from flask import request


class StatusProject(Resource):

    def get(self):
        return {
            'foreseenDate': '24/10/2018',
            'spending': 1200,
            'foreseenSpending': 600,
            'solvedProblems': 60,
            'deliveries': {
                'value': [[
                    12, 31, 4, 9, 22, 6, 8
                ]],
                'last_update': '1 dias atrás'
            },
            'doneTasks': {
                'value': [[
                    220, 360, 270, 91, 135, 244,
                    81, 132, 317, 110, 258, 160
                ]],
                'last_update': '5 minutos atrás'
            },
            'tasks': [
                'Reunião final com a equipe',
                'Teste de integração de todo o sistema',
                'Happy Hour de comemoração',
                'Relatório final'
            ],
            'employees': {
                'value': [
                    ["Mike Wazalski", "R$1536,738", "Marketing"],
                    ["Jessica Alba", "R$3223,789", "Programação"],
                    ["Roberto Freitas", "R$4256,142", "Engenharia de software"],
                    ["Bruce Wayne", "R$1838,735", "Relações humanas"]
                ],
                'last_update': '3 dias atrás'
            }
        }
