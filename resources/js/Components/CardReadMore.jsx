import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import Modal from './Modal';
   
  export function CardReadMore({title, resumo, icon = null}) {
    return (
      <Card className="mt-6 w-96  bg-gray-50 dark:bg-blue-900">
        <CardBody>
          {icon ? icon : <></>}
          <Typography className="text-gray-800 dark:text-white mb-2" variant="h5" color="blue-gray" >
            {title}
          </Typography>
          <Typography className="text-gray-800 dark:text-white">
            {resumo}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="#" className="inline-block">
            <Button size="sm" variant="text" className="flex items-center gap-2 text-gray-800 dark:text-white">
              Leia Mais
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardFooter>
      </Card>
    );
  }