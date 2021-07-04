export default [
  {
    id: "1",
    value: "选项1"
  },
  {
    id: "2",
    value: "选项2"
  },
  {
    id: "3",
    value: "选项3",
    children: [
      {
        id: "31",
        value: "选项3-1"
      },
      {
        id: "32",
        value: "选项3-2",
        children: [
          {
            id: "321",
            value: "选项3-2-1"
          },
          {
            id: "322",
            value: "选项3-2-2",
            children: [
              {
                id: "3221",
                value: "选项3-2-2-1"
              },
              {
                id: "3222",
                value: "选项3-2-2-2",
                children: [
                  {
                    id: "32221",
                    value: "选项3-2-2-2-1"
                  },
                  {
                    id: "32222",
                    value: "选项3-2-2-2-2"
                  },
                  {
                    id: "32223",
                    value: "选项3-2-2-2-3"
                  },

                ]
              },
              {
                id: "3223",
                value: "选项3-2-2-3"
              },

            ]
          },
          {
            id: "323",
            value: "选项3-2-3"
          },
        ]
      },
      {
        id: "33",
        value: "选项3-3"
      },
    ]
  },
  {
    id: "4",
    value: "选项4",
  },
  {
    id: "5",
    value: "选项5",
    children:[
      {
        id:"55",
        value:"选项5-1"
      }
    ]
  }
]