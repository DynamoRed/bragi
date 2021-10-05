export default function ({ store, redirect }) {
  if (store.state.redirection == "") {
    return redirect('https://dynamored.com')
  }
}