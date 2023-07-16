export interface Message {
  affenpinscher: string[];
  african: string[];
  airedale: string[];
  akita: string[];
  appenzeller: string[];
  australian: string[];
  basenji: string[];
  beagle: string[];
  bluetick: string[];
  borzoi: string[];
  bouvier: string[];
  boxer: string[];
  brabancon: string[];
  briard: string[];
  buhund: string[];
  bulldog: string[];
  bullterrier: string[];
  cattledog: string[];
  chihuahua: string[];
  chow: string[];
  clumber: string[];
  cockapoo: string[];
  collie: string[];
  coonhound: string[];
  corgi: string[];
  cotondetulear: string[];
  dachshund: string[];
  dalmatian: string[];
  dane: string[];
  deerhound: string[];
  dhole: string[];
  dingo: string[];
  doberman: string[];
  elkhound: string[];
  entlebucher: string[];
  eskimo: string[];
  finnish: string[];
  frise: string[];
  germanshepherd: string[];
  greyhound: string[];
  groenendael: string[];
  havanese: string[];
  hound: string[];
  husky: string[];
  keeshond: string[];
  kelpie: string[];
  komondor: string[];
  kuvasz: string[];
  labradoodle: string[];
  labrador: string[];
  leonberg: string[];
  lhasa: string[];
  malamute: string[];
  malinois: string[];
  maltese: string[];
  mastiff: string[];
  mexicanhairless: string[];
  mix: string[];
  mountain: string[];
  newfoundland: string[];
  otterhound: string[];
  ovcharka: string[];
  papillon: string[];
  pekinese: string[];
  pembroke: string[];
  pinscher: string[];
  pitbull: string[];
  pointer: string[];
  pomeranian: string[];
  poodle: string[];
  pug: string[];
  puggle: string[];
  pyrenees: string[];
  redbone: string[];
  retriever: string[];
  ridgeback: string[];
  rottweiler: string[];
  saluki: string[];
  samoyed: string[];
  schipperke: string[];
  schnauzer: string[];
  segugio: string[];
  setter: string[];
  sharpei: string[];
  sheepdog: string[];
  shiba: string[];
  shihtzu: string[];
  spaniel: string[];
  spitz: string[];
  springer: string[];
  stbernard: string[];
  terrier: string[];
  tervuren: string[];
  vizsla: string[];
  waterdog: string[];
  weimaraner: string[];
  whippet: string[];
  wolfhound: string[];
}

export interface ListBreeds {
  message: Message;
  status: string;
  code?: number;
}

export interface BreedInfo {
  message: string;
  status: string;
}
