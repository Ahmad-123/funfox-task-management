import { rest } from "msw";
export const handlers = [
  rest.get(
    "http://mock-api.com/api/admin/user/graph_stats",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          statusCode: 200,
          message: "Success",
          data: {
            cumulativeSubscribers: 3,
            filteredCumulativeSubscribers: 3,
            memberShipWithdrawls: [
              {
                date: "05/2022",
                users: 0,
              },
              {
                date: "06/2022",
                users: 0,
              },
              {
                date: "07/2022",
                users: 0,
              },
              {
                date: "08/2022",
                users: 0,
              },
              {
                date: "09/2022",
                users: 0,
              },
              {
                date: "10/2022",
                users: 1,
              },
            ],
            newMemberShips: [
              {
                date: "05/2022",
                users: 0,
              },
              {
                date: "06/2022",
                users: 0,
              },
              {
                date: "07/2022",
                users: 0,
              },
              {
                date: "08/2022",
                users: 1,
              },
              {
                date: "09/2022",
                users: 1,
              },
              {
                date: "10/2022",
                users: 1,
              },
            ],
          },
        })
      );
    }
  ),
];
