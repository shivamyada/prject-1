import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
const SlotsPage = () => {
  const tempseatlayout = [
    {
      type: "4 Wheeler",
      rows: [
        {
          rowname: "H",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "I",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "J",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "K",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
      ],
      price: 100,
    },
    {
      type: "2 Wheeler",
      rows: [
        {
          rowname: "L",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "M",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "N",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "O",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "P",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
      ],
      price: 100,
    },
  ];

  const slots = [
    {
      type: "platinum",
      rows: [
        {
          rowname: "H",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "I",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "J",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
      ],
      price: 500,
    },
  ];

  const slotss = [
    {
      type: "4 Wheeler",
      rows: [
        {
          rowname: "H",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "I",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "J",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "K",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
      ],
      price: 100,
    },
    {
      type: "2 Wheeler",
      rows: [
        {
          rowname: "L",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "M",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "N",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "O",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
        {
          rowname: "P",
          cols: [
            //  col 1
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            }, //  col 2
            {
              seats: [
                {
                  seat_id: "1",
                },
                {
                  seat_id: "2",
                },
                {
                  seat_id: "3",
                },
                {
                  seat_id: "4",
                },
                {
                  seat_id: "5",
                },
                {
                  seat_id: "6",
                },
                {
                  seat_id: "7",
                },
                {
                  seat_id: "8",
                },
                {
                  seat_id: "9",
                },
                {
                  seat_id: "10",
                },
              ],
            },
          ],
        },
      ],
      price: 100,
    },
  ];

  const notAvailableSeats = [""];
  const { id, date } = useParams();

  // const [tempseatlayout, setTempseatlayout] = useState([]);

  // async function getSlots(e) {
  //   e.preventDefault();

  //   if (date) {
  //     console.log("in useeffect");
  //     await axios
  //       .get(`/place/getslots/${id}/${date}`)
  //       .then(async (response) => {
  //         console.log(response.ok);
  //         if (response.ok) {
  //           setTempseatlayout(response.data);
  //         } else {
  //           const data = { id, tempseatlayoutt, date };
  //           console.log("else");
  //           await axios
  //             .post("/place/createslots", data)
  //             .then((response) => console.log(response));
  //         }
  //       });
  //   }
  // }
  // useEffect(() => {
  //   getSlots;
  // }, [date]);

  const book=()=>{
    alert("successfully your slot are booked")

  }
  return (
    <div className=" bg-black text-white">
      <Navbar />
      <div className=" bg-black text-white">
        {tempseatlayout.map((seatType, index) => (
          <div
            className="seat-type py-[10px] px-[20px] m-[10px] pl-52 "
            key={index}
          >
            <h2 className=" text-[15px] text-base mb-[10px] font-normal border border-gray-200  py-[5px] px-[20px] rounded-3xl w-max">
              {seatType.type}
            </h2>
            <div className="seat-rows">
              {seatType.rows.map((row, rowIndex) => (
                <div
                  className="seat-row m-[2px] flex  items-center  justify-between "
                  key={rowIndex}
                >
                  <p className="rowname font-medium text-sm bg-red-600 w-7 h-7 flex justify-center items-center rounded-full ">
                    {row.rowname}
                  </p>
                  <div className="seat-cols flex justify-around w-full px-4 py-4  ">
                    {row.cols.map((col, colIndex) => (
                      <div className="seat-col flex" key={colIndex}>
                        {col.seats.map((seat, seatIndex) => (
                          <div key={seatIndex}>
                            {notAvailableSeats.find(
                              (s) =>
                                s.row === row.rowname &&
                                s.seat_id === seat.seat_id &&
                                s.col === colIndex
                            ) ? (
                              <span className="seat-unavailable w-8 h-8 flex justify-center items-center mr-1 border border-black">
                                {seatIndex + 1}
                              </span>
                            ) : (
                              <span
                                className={
                                  "seat-available w-8 h-8 flex justify-center items-center mr-1 rounded-md shadow-md border border-gray-200 cursor-pointer"
                                }
                              >
                                {seatIndex + 1}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className=" flex justify-center items-center mb-4">
        {" "}
        <div className=" flex gap-4 justify-center shadow-md rounded-lg px-2 font-poppins py-6 flex-row items-center p-5  w-[300px] border-gray-200 border">
          <div className="flex gap-2">
            <h3>Total</h3>
            <h3 className=" text-red-600">Rs 100</h3>
          </div>
          <button  onClick={book}   className="px-2 py-2 bg-red-600 text-black rounded-2xl">
            Book Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SlotsPage;
