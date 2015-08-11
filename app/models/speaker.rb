class Speaker < User

  default_scope -> { where is_speaker: true }

end
